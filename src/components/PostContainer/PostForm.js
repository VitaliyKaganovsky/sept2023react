import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {

    const {
        handleSubmit,
    register,
    reset} = useForm();
    
    const saver = (post) => {
        postService.create(post).then(({data})=> setPosts(prev => [...prev, data]))
    }

    return (
        <form onSubmit={handleSubmit(saver)}>
            <input type="text" placeholder={`title`} {...register(`title`)}/>
            <input type="text" placeholder={`body`} {...register(`body`)}/>
            <button>save</button>
        </form>
    );
};

export {PostForm};