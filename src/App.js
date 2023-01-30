// css
import "./App.css";

// components
import Project from "./components/project-card";
import Hero from "./components/hero";
import BlogPost from "./components/blog-post";

// images
import emoji from "./assets/emoji.png";
import todo from "./assets/todo.png"
import contact from "./assets/contact.png"

function App() {
  return (
    <div className="App">
    <Hero/>
    
    <section className="section">
    <h2>Projects</h2>
    <Project thumbnail={emoji} title={"Emoji Search"} description={"This project is created for only unit test. This has unit test."}/>
    <Project thumbnail={todo} title={"To Do List"} description={"This is basic to do list app created by react app."}/>
    <Project thumbnail={contact} title={"Contact App"} description={"This is a basic contact app created with React."}/>
    <div className="link-btn"><a>See More</a></div>
    </section>

    <section className="section">
    <h2>Blog Posts</h2>

    
    <BlogPost title="What is Version Control System?" description="May 30, 2020"/>
    <BlogPost title="What is Git, Github?" description="June 20, 2020"/>
    <BlogPost title="Test Article" description="September 28, 2020"/>
    <div className="link-btn"><a>See More</a></div>
    </section>

    <input type="text"/>
    
    </div>
  );
}

export default App;
