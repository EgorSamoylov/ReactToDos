import React, { useRef, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
      
    const [post, setPost] = useState({title: '', body: ''});
      
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
  }
  
    return (
        <form>
        {/* Управляемый компонент (организация двухстороннего связывания)*/}
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})} //изменяем нужное поле, а остальное в неизменном виде
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создание поста</MyButton>
      </form>
    );
};

export default PostForm;