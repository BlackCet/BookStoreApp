function About() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-20 my-16 dark:bg-gray-200 dark:text-black">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-orange-600">About OpenShelf</h1>

      <p className="text-lg mb-8 text-gray-700 leading-relaxed text-center">
        <span className="font-semibold text-orange-500">OpenShelf</span> is your modern digital library — offering a curated selection of free and affordable books.
      </p>

      <p className="text-lg mb-8 text-gray-700 leading-relaxed text-center">
        Whether you're exploring <span className="font-medium">JavaScript frameworks</span> or diving into fiction, OpenShelf is designed to keep learning and reading easy, enjoyable, and accessible.
      </p>

      <p className="text-lg mb-8 text-gray-700 leading-relaxed text-center">
        Clean UI, fast load times, mobile responsiveness — we built OpenShelf for readers who love simplicity with substance.
      </p>
    </div>
  );
}

export default About;
