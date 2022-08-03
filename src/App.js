import dog from './assets/dog.jpg';

function App() {
  return (
    <div className="w-100 h-100 px-4 pt-2">
      <h1>Uh-oh! This site is currently down for maintenance</h1>
      <p>I am actively updating my site to a snazzy 2.0 version. While you wait, enjoy a picture of my dog!</p>
      <img src={dog} width={400} height={300} alt={'My dog'}/>
    </div>
  );
}

export default App;
