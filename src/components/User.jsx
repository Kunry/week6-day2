import { useState } from 'react';

const User = ({ newContact, isLoading }) => {
  const [likes, setLikes] = useState(0);

  /**
   * props -> {
   *  newContact: {
   *  name: string,
   *  age: number,
   *  address: string
   * } }
   */

  const updateLike = (signo) => {
    const newLike = likes + signo;
    if (newLike >= 0) setLikes(newLike);

  };


  /**
   * Funciones separadas
   * 
   * const addLike = () => {
   *  const newLike = likes + 1;
   *  setLikes(newLikes);
   * }
   * 
   * const removeLike = () => {
   *  const newLike = likes - 1;
   *  if (newLike >= 0) setLikes(newLike);
   * }
   * 
   * 
   * return (
   * <>
   *   <div>
   *     <h1>{newContact.name}</h1>
   *     <p>{newContact.age}</p>
   *     <p>{newContact.address}</p>
   *   </div>
   *   <p>Likes: {likes}</p>
   *   <button onClick={addLike}>Add Like</button>
   *   <button onClick={removeLike}>Remove Like</button>
   * </>
   * )
   */

  if (!isLoading)
  {
    return(
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
      </div>
    )
  }


  return (
    <>
      <div>
        <h1>{newContact.name}</h1>
        <p>{newContact.age}</p>
        <p>{newContact.address}</p>
      </div>
      <p>Likes: {likes}</p>
      <button onClick={() => updateLike(1)}>Add Like</button>
      <button onClick={() => updateLike(-1)}>Remove Like</button>
    </>
  );
};

export default User;
