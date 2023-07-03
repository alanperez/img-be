import tensorflow as tf
import tensorflow_datasets as tfds
from model import create_model  # assuming you have your model in 'model.py'

def preprocess(features):
    # Resize and normalize images
    image = tf.cast(features['image'], tf.float32) / 255.
    image = tf.reshape(image, (28, 28, 1))

    label = features['label'] - 1  # Subtract 1 to make labels start from 0

    return image, label
# Load the dataset
(ds_train, ds_test), ds_info = tfds.load('emnist/letters', split=['train', 'test'], shuffle_files=True, with_info=True, as_supervised=False)

# Preprocess the dataset
ds_train = ds_train.map(preprocess)
ds_test = ds_test.map(preprocess)

# Batch the dataset
ds_train = ds_train.batch(32)
ds_test = ds_test.batch(32)

# Create the model
model = create_model()

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(ds_train, epochs=10, validation_data=ds_test)

# Save the model
model.save('my_model.h5')