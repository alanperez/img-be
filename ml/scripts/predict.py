import os
import numpy as np
import tensorflow as tf
from PIL import Image
import easyocr
from scripts.preprocess  import preprocess_image
import cv2

# Get the directory that the current script is in
script_dir = os.path.dirname(os.path.realpath(__file__))

# Build the path to the model file
model_path = os.path.join(script_dir, 'my_model.h5')

# Load the model
model = tf.keras.models.load_model(model_path)
reader = easyocr.Reader(['en'])  # set the language to English

def process_image(image_file):
# Load image
    img = cv2.imdecode(np.fromstring(image_file.read(), np.uint8), cv2.IMREAD_UNCHANGED)

    # Convert to grayscale if necessary
    if len(img.shape) == 3:
        img = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)

    # Run easyOCR on the image
    ocr_result = reader.readtext(img)
    ocr_text = ' '.join([item[1] for item in ocr_result])
    
    corrected_text = ""

    for char in ocr_text:
        # Prepare the character image for the model
        char_img = cv2.resize(img, (28, 28))
        char_img = char_img / 255
        char_img = char_img.reshape(1,28,28,1)
        
        # Make a prediction with your model
        prediction = model.predict(char_img)

        # Convert prediction to character
        predicted_char = prediction_to_character(prediction[0])

        corrected_text += predicted_char

    return {"ocr_text": ocr_text, "corrected_text": corrected_text}
def prediction_to_character(prediction):
    # EMNIST 'letters' dataset classes are from 1-26, mapping to a-z
    mapping = " abcdefghijklmnopqrstuvwxyz"  # adding a space at start for 1-indexing
    # Take the index of the highest value in the prediction, that's your class
    predicted_class = np.argmax(prediction)
    # Return the corresponding character
    return mapping[predicted_class]