function App() {
  let hooks = [
    {
      name: "useFetch",
      description:
        "This hook is pretty useful when it comes to data fetching. You can pass the url and options, and it will return the data, loading and error.",
    },
    {
      name: "useLocalStorage",
      description:
        "This hook is used to store data in local storage. You can pass the key and the initial value, and it will return the value and setValue function needs a value and key to store it.",
    },
    {
      name: "useSessionStorage",
      description:
        "This hook is used to store data in session storage. You can pass the key and the initial value, and it will return the value and setValue function needs a value and key to store it.",
    },
    {
      name: "useDarkMode",
      description:
        "This hook is used to enable the dark mode in your application.",
    },
    {
      name: "useTitle",
      description: "This hook set the title of a particular page.",
    },
    {
      name: "useToggle",
      description: "This hook is used to toggle a boolean value.",
    },
    {
      name: "useWindowSize",
      description: "This hook is used to get the window size.",
    },
  ];

  return (
    <div className="App">
      <h1>Custom Hooks for every Beginners</h1>
      <h4>You can see some of the common and useful react hooks here!</h4>
      <div className="hooks">
        {hooks.map((hook, index) => (
          <div className="hook" key={index}>
            <h3>{hook.name}</h3>
            <p>{hook.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
