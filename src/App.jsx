import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AbuZhang_logo from './components/AbuZhang_logo.png'
import YLight from './components/YLight.jpg'
import Mengo from './components/Mengo_image.png'
import Poizza from './components/Poizza_image.png'
import AddDishForm from './components/AddDishForm'
import MainTable from './components/Main_table.png'
import Snacks from './components/Snacks.png'
import Sweets from './components/Sweets.png'
import AddSnacksForm from './components/AddSnacksForm'
import AddSweetsForm from './components/AddSweetsForm'
import Entance from './components/Entrance.png'
import AddCommentForm from './components/AddCommentForm'


function App() {
  //----------------------------dishes----------------------------------
  const [dishes, setDishes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const AddDish = (newDishData) => {
    const newId = dishes.length + 1;
    const newDish = {
      id: newId,
      ...newDishData  // name و description جايين من المكون
    };
    
    setDishes([...dishes, newDish]);
    setShowForm(false);
  };
    const deleteDish = (id) => {
    setDishes(dishes.filter(dish => dish.id !== id));
  };

//======================snacks=====================================
  const [snacks, setSnacks] = useState([]);
  const [showSnack, setSnackForm] = useState(false);

  const AddSnack = (newSnackData) => {
    const newId = snacks.length + 1;
    const newSnack = {
      id: newId,
      ...newSnackData  // name و description جايين من المكون
    };
    
    setSnacks([...snacks, newSnack]);
    setSnackForm(false);
  };
    const deleteSnack = (id) => {
    setSnacks(snacks.filter(snack => snack.id !== id));
  };

//-------------------------sweets----------------------------
const [sweets, setSweets] = useState([]);
  const [showSweet, setSweetsForm] = useState(false);

  const AddSweet = (newSweetData) => {
    const newId = sweets.length + 1;
    const newSweet = {
      id: newId,
      ...newSweetData  // name و description جايين من المكون
    };
    
    setSweets([...sweets, newSweet]);
    setSweetsForm(false);
  };
    const deleteSweet = (id) => {
    setSweets(sweets.filter(sweet => sweet.id !== id));
  };

  //----------------------------comments----------------------------------
const [comments, setComments] = useState([]);
const [showCommentForm, setShowCommentForm] = useState(false);

const AddComment = (newCommentData) => {
  const newId = comments.length + 1;
  const newComment = {
    id: newId,
    ...newCommentData
  };
  
  setComments([...comments, newComment]);
  setShowCommentForm(false);
};

const deleteComment = (id) => {
  setComments(comments.filter(comment => comment.id !== id));
};

{/*=======================================UI================================================ */}
  return (
    <>
      <nav className='AbuZhangNavBar'>
        <img className='AbuZhangLogo' src={Entance} alt='Our logo'></img>
        <p className='AbuZhangTitle'>AbuZhang</p>
        <p className='AbuZhangSig'>Where taste matters the most</p>
      </nav>

      <fieldset className='MenuTable'>

        <legend>Menu</legend>

        <h3>AbuZhang special</h3>
          <div className='SpecialsContainer'>
            <div className='ZhangZhangCard'>
              <img className='ZhangZhang' src={AbuZhang_logo} alt='Special'></img>
              <p>Zhang Zhang:<br /></p>
              <p>Spiecy noodle with<br />our sepcial ingredients</p>
            </div>

            <div className='PoizzaCard'>
              <img className='Poizza' src={Poizza} alt='Logo'></img>
              <p>Poizza:<br /></p>
              <p>Not any Pizza<br />you'd ever taste</p>
            </div> 

            <div className='MengoCard'>
            <img className='Mengo' src={Mengo} alt='Logo'></img>
            <p>Mengo:<br /></p>
            <p>Our special Mango<br /> juice</p>
            </div>
          </div>

        {/*=============================Main table ===================================*/}
        <h3>Main table</h3>
        <div className='MainTableContainer'>

        <button className='AddingDish' onClick={() => setShowForm(true)}>+</button>

        {dishes.map(dish => (
          <div key={dish.id} className='NewMainTableCard'>
            <img 
            className='NewMainTable'
            src={MainTable}
            alt={dish.name}/>
            <p>{dish.name}:<br /></p>
            <p>{dish.description}</p>
            <button 
                className='DeleteDish' 
                onClick={() => deleteDish(dish.id)}>
                Delete dish
              </button>
          </div>
          ))}
          {showForm && <AddDishForm onAddDish={AddDish} />}
        </div>

        {/*=================================Snacks=================================== */}
        <h3>Snacks</h3>
        <div className='SnacksContainer'>
          <button className='AddingDish' onClick={() => setSnackForm(true)}>+</button>
          
          {snacks.map(snack => (
          <div key={snack.id} className='SnacksTableCard'>
            <img 
            className='NewSnacksTable'
            src={Snacks}
            alt={snack.name}/>
            <p>{snack.name}:<br /></p>
            <p>{snack.description}</p>
            <button 
                className='DeleteDish' 
                onClick={() => deleteSnack(snack.id)}>
                Delete snack
              </button>
          </div>
          ))}
          {showSnack && <AddSnacksForm onAddDish={AddSnack} />}
        </div>

        {/*===========================================Sweets====================================== */}
        <h3>Sweets</h3>
        <div className='SweetsContainer'>
          <button className='AddingDish' onClick={() => setSweetsForm(true)}>+</button>
          {sweets.map(sweet => (
          <div key={sweet.id} className='SweetsTableCard'>
            <img 
            className='NewSweetsTable'
            src={Sweets}
            alt={sweet.name}/>
            <p>{sweet.name}:<br /></p>
            <p>{sweet.description}</p>
            <button 
                className='DeleteDish' 
                onClick={() => deleteSweet(sweet.id)}>
                Delete sweet
              </button>
          </div>
          ))}
          {showSweet && <AddSweetsForm onAddSweet={AddSweet} />}
        </div>
  
      </fieldset>

      {/*===========================Comments============================= */}
      {/*===========================Comments============================= */}
<fieldset className='CommentSection'>
  <legend>Comments</legend>
  
  <button className='AddingComment' onClick={() => setShowCommentForm(true)}>+</button>
  
  <div className='CommentsContainer'>
    {/* التعليقات الثابتة */}
    <div className='LauraComment'>
      <h3>Laura Herrsen</h3>
      <p>I love it here</p>
    </div>

    <div className='HaithamComment'>
      <h3>Haitham Rank</h3>
      <p>Tried it with the family, the kids love it!</p>
    </div>

    <div className='ChineseComment'>
      <h3>治療師</h3>
      <p>你應該試試看</p>
    </div>

    {/* التعليقات المضافة من المستخدم */}
    {comments.map(comment => (
      <div key={comment.id} className='CommentCard' style={{ position: 'relative' }}>
        <h3>{comment.name}</h3>
        <p>{comment.text}</p>
      </div>
        ))}
      </div>
  
  {/* الفورم - يظهر فقط عند الضغط على + */}
    {showCommentForm && <AddCommentForm onAddComment={AddComment} />}
</fieldset>

<footer className='Disclaimer'>
  <h1>Disclaimer</h1>
  <p>This page was only made for educational purposes only.<br />Any names, titles, images, people, are fake and has nothing to do with the real life</p>
</footer>
    </>
  );
}


export default App
