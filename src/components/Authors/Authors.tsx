import { ReactElement } from 'react';
import { about } from '../../data/about.json';
import { useParams } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';

type Author = {
    name: string,
    header: string,
    text: string
}

function Authors() {
  const { name } = useParams();

  const pickedAuthor: Author | undefined= about.find(item => item.name == name);

  const img: string = new URL(`../../images/about/${pickedAuthor!.name}2.jpg`, import.meta.url).href;

  let nameCap: string = '';
  if (name) {
    const arr = name.split('');
    arr[0] = arr[0].toUpperCase();
    nameCap = arr.join('');
  } 

  const pageContent: ReactElement | ReactElement[] = (
    pickedAuthor
      ? 
      <>
        <div className='author__card'>
          <img src={img} className='author__img' />
          <h1 className='author__title'>{nameCap}</h1>
        </div>
        
        <h2 className='author__subtitle'>{pickedAuthor.header}</h2>

        {pickedAuthor.text.split('\n').map((p, i) => 
          <p key={i} className='author__p'>{p}</p>
        )}

        <Contacts name={name as string}/>
      </>
      : <p>Sorry, something went wrong. Can you please go back to the home page while I'm figuring this out? 😇 You might as well contact me. The contacts are in the About section, Mariia</p>
  )

  const content = (
    <main className="author">
        {pageContent}
    </main>
  )

  return content;
}

export default Authors
