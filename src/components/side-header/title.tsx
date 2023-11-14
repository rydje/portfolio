export default function Title() {
  return (
    <div>
      <div className="text-neutral-100 font-bold">
        <h2 className="text-xl">Hello, my name is</h2>
        <h1 className="my-2 text-6xl">Ryan Djebrouni</h1>
        <h2 className="text-xl">
          and I’m a <span className="text-amaranth-500">Backend Engineer</span>
        </h2>
      </div>
      <p>I have been crafting ideas into production for more than 10 years</p>
        <a href="mailto:ryan.djebrouni@gmail.com" className="inline-block my-12 px-8 py-2 bg-amaranth-500 rounded-lg text-center text-neutral-100 text-lg font-semibold hover:text-neutral-100">
          HIRE ME
        </a>
    </div>
  );
}
