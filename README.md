Project Description:
The Product Description Generator AI aims at recognizing a fashion or electronic product, generating and displaying a Title, a small description of 40 to 50 words and listing 5 - 6 features of the product.

Tools and Technologies used:
Backend : FastAPI (python)
Frontend: vite + React (Javascript)
AI Models for image recognition: Salesforce/blip-image-captioning-base (a pre-trained model)
AI Model for promp engineering and text generation: OpenAI gpt-4o

To deploy and run the project in you local system:
1. Download the project or clone the github repo.
2. Open a terminal from the root folder
3. Then go to the backend folder by using the command: cd backend
4. Install the required packages and libraries for the backend: pip install -r requirements.txt
5. After all the installation, in the backend folder create a .env file
6. Create a variable called OPEN_API_KEY= in the .env file
7. Now generate a apikey for the project on your openai platform and paste the key here
8. Then move to the frontend folder by using command:
