import axios from "axios";

async function getData(id) {
    try {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id)
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + id)

        console.log(`USERS(${id}) : `, users)
        console.log(`POSTS(${id}) : `, posts)
    }
    catch (err) {
        console.log(err)
    }
}


export default getData