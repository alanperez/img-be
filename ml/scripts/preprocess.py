import numpy as np
from PIL import Image

def preprocess_image(img: Image):
    # resize, normalize, etc.
    img = img.resize((28, 28))
    img_np = np.array(img) / 255.0
    return img_np