import { Avatar, StarRating } from '@/components/atoms';

function App() {
  const url =
    'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';

  return (
    <>
      <h1>Hello World</h1>
      <Avatar avatarUrl={url} userName="John Doe" size="small" />
      <StarRating userRating={3} />
    </>
  );
}

export default App;
