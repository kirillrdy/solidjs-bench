import type { Component } from 'solid-js';
import { For, createSignal } from 'solid-js';

const App: Component = () => {
  let dummyPeople = [];
  for (let i = 0; i < 100000; i++) {
    const [selected, setSelected] = createSignal(false)
    dummyPeople.push({ name: "Kirill", selected: selected, setSelected: setSelected })
  }
  const [people, setPeople] = createSignal(dummyPeople)
  return (
    <>
      <For each={people()}>
        {
          (item) =>
            <div onclick={() => { item.setSelected(true) }}>
              {item.name} {item.selected().toString()}
            </div>
        }</For>
    </>
  );
};

export default App;
