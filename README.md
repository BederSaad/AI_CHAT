# AI Chat Website  

AI Chat Website is a modern, user-friendly platform built using React that allows users to interact with an AI chatbot. The platform integrates Clerk authentication for secure user management and profile customization.

## Table of Contents  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Authentication Setup](#authentication-setup)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## Features  
**💬 AI-Powered Chat**  
Interact with a responsive AI chatbot  

**🔐 User Authentication**  
Secure login and registration using Clerk  

**🙋‍♂️ Profile Management**  
Users can update their profiles, including name, email, and avatar  

**📱 Responsive Design**  
Fully optimized for mobile, tablet, and desktop devices  

**🎨 Customizable Themes**  
Switch between light and dark modes  

**⚡ Real-Time Interaction**  
Fast and seamless communication with the AI  

## Technologies Used  
- **Frontend**: React.js  
- **Styling**: Tailwind CSS  
- **Authentication**: Clerk  
- **State Management**: React Context  
- **Hosting**: Vercel  
- **Other Tools**:  
  - Axios for API calls  
  - React Router for navigation  

## Installation  
### Prerequisites  
- Node.js (v16 or higher)  
- npm or yarn  
- Git  

### Steps  

1. Clone the repository:
    ```bash  
    git clone https://github.com/your-username/ai-chat-website.git

2. Navigate to the client folder:

    ```bash
    cd ai-chat-website/client

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install

4. Create a .env file in the client folder and add the following:

    ```bash
    VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

🔐 Note: Replace your-clerk-publishable-key with your actual Clerk publishable key.

5. Start the development server:

      ```bash
      npm run dev
      # or
      yarn dev

The app should now be running at http://localhost:3000.

### Usage

Sign Up / Log In: Use the Clerk authentication system to create an account or log in.

Chat with AI: Once logged in, start interacting with the AI chatbot.

Manage Profile: Navigate to the profile section to update your details or change your theme preferences.

Logout: Use the logout button to securely end your session.

Authentication Setup

This project uses Clerk for authentication. To integrate Clerk:

Sign up for a free account at Clerk.dev.

Create a new application in the Clerk dashboard.

Copy the Publishable Key from the Clerk dashboard.

Add the key to your .env file in the client folder as shown above.

Follow Clerk's documentation to customize authentication flows if needed.





















