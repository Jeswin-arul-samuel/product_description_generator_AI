Project Description:
The Product Description Generator AI aims at recognizing a fashion or electronic product, generating and displaying a Title, a small description of 40 to 50 words and listing 5 - 6 features of the product.

Tools and Technologies used:
Backend : FastAPI (python)
Frontend: vite + React (Javascript)
AI Models for image recognition: Salesforce/blip-image-captioning-base (a pre-trained model)
AI Model for promp engineering and text generation: OpenAI gpt-4o

Project Structure:
project_folder
  |_ backend
    |_ models
      |_ electronics_model.py         # To detect the electronics product and generate the required output
      |_ fashion_model.py             # To detect the fashion product and generate the required output
      |_ gpt_wrapper.py               # To help the above 2 models to generate the 
