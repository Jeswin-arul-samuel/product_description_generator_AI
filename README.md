## Project Description:
The Product Description Generator AI aims at recognizing a fashion or electronic product, generating and displaying a Title, a small description of 40 to 50 words and listing 5 - 6 features of the product.

## Tools and Technologies used:
**Backend:** FastAPI (python)
**Frontend:** vite + React (Javascript)
**AI Models for image recognition:** Salesforce/blip-image-captioning-base (a pre-trained model)
**AI Model for promp engineering and text generation:** OpenAI gpt-4o

# To deploy and run the project in you local system(ubuntu os / wsl):

1. Download the project or clone the github repo
2. Open a terminal from the root folder
3. Type **code .** to open vscode
4. Open a new terminal in vscode using **Terminal --> New Terminal**
5. Then go to the backend folder by using the command: **cd backend**
6. Install the required packages and libraries for the backend: **pip install -r requirements.txt**
7. After the installation, in the backend folder create a **.env** file
8. Create a variable called **OPEN_API_KEY=** in the .env file
9. Now generate a apikey for the project on your openai platform and paste the key here
10. Start the backend server using the command: **uvicorn main:app --reload**
11. Open a New terminal beside the existing one
12. Move to the frontend folder in the new terminal by using command: **cd frontend**
13. Now install all the npm packages using : **npm install**
14. Start the frontend application with the command: **npm run dev**
15. Follow the link generated in the terminal to open the web app and test it by giving in input images and short video clips of fashion items and electronic products.

16. Link to open the application on the localhost system is  **http://localhost:5173**

