import './Authors.css';
import { ReactElement } from 'react';
import { about } from '../../data/about.json';
import { useParams } from 'react-router-dom';

type Author = {
    name: string,
    header: string,
    text: string
}

function Authors() {
  const { name } = useParams();

  const pickedAuthor: Author | undefined = about.find(item => item.name == name);

  const pageContent: ReactElement | ReactElement[] = (
    pickedAuthor
      ? <>
        <h1>{pickedAuthor.name}</h1>
        <h2>{pickedAuthor.header}</h2>
        {pickedAuthor.text.split('\n').map((p, i) => <p key={i}>{p}</p>)}
      </>
      : <p>Sorry, something went wrong. Can you please go back to the home page while I'm figuring this out? 😇</p>
  )

  const content = (
    <main className="main">
        {pageContent}
    </main>
  )

  return content;
}

export default Authors
