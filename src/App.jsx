// import Greeting from "./components/greeting";

export default function App() {
  return (
    <div className="flex items-center border-2 border-green-500 h-screen">
      {/* {Greeting({ name: 'Oluwasetemi' })} */}
      {/* <Greeting name='Oluwasetemi' children={`<h1> Hey I am a special children prop </h1>`} /> */}
      <Greeting name="Oluwasetemi" onGreeting={() => console.log("greeting")}>
        <h1> Hey I am a special children prop </h1>
        <p className="class" id="id">
          danger
        </p>
        <pre>1</pre>
        <code>2</code>
      </Greeting>
      <h1 className="text-red-500">Hello</h1>
      <p>World</p>
      <img
        className="p-2 w-[200px] h-[200px] rounded-full rounded-t-full"
        src={`https://res.cloudinary.com/drnqdd87d/image/upload/v1730477919/headshot/jmvng5pooqv8fc0o7mr7.jpg`}
        alt={`alt image of the tutor`}
      />
    </div>
  );
}
