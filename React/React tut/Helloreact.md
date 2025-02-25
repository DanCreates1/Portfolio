To import a seprate file use  ``` import {} from ```
To export use ```export default```

This is important for every single React project ```import { createRoot } from "react-dom/client"```
  ☝️ Usage ```const root = createRoot(document.getElementById("root"))```

!!!!!!!!!!!!!PROPS!!!!!!!!!!!!!!!
export default function Contact(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />

useage:
function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />


How to setup a react project👇
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev



This stops the page from refreshing 
event.preventDefault()
