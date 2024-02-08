let username = localStorage.getItem("username");
console.log(username);
export default function Dashboard(){
    return (
        <div>
            <h1>{username}</h1>
            <p >Welcome to my Portfolio Website! I'm Delvin, and I'm thrilled to have you here. This website serves as a digital canvas where I showcase my projects for who ever is intrested. Whether you stumbled upon this site by chance or were intentionally seeking it out, I hope you like what you see. As a developer, I've dedicated this space to showcase five of my projects that I am proud to show off.</p>

            <p > Happy exploring, and feel free to reach out if you have any questions, comments, or just want to say hello. I value each and every visitor, and I'm excited to engage in meaningful conversations with you. Thank you for visiting, and I hope you enjoy your time here.</p>
        </div>
    )
}