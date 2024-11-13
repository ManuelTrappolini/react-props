import PostsCard from "./Card/PostsCard"
import posts from "../data/db.js"

export default function AppMain() {

    return (
        <main>
            <div className="container">
                {posts.map((post, index) => <PostsCard key={index} post={post} />)}
            </div>
        </main>
    )
} 