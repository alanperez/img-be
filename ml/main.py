from fastapi import FastAPI
from PIL import Image
import numpy as np
import urllib.request
import io
from pydantic import BaseModel
import pytesseract
from scripts.predict import process_image

# Define a pydantic model for the request body
class ImageUrl(BaseModel):
    url: str

app = FastAPI()

@app.post('/process')
async def process(image_url: ImageUrl):
    # 'image_url.url' is the URL from the request body

    with urllib.request.urlopen(image_url.url) as url:
        f = io.BytesIO(url.read())

    # apply your ML model to the image
    result = process_image(f)

    return result

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)