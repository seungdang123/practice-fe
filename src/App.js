function App() {
  return (
    <div className="flex flex-col  items-center justify-evenly h-screen bg-sky-900">
      <h1 className="mt-10 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
        Practice HTML, CSS and JS
      </h1>
      <div class="flex flex-col  items-center justify-evenly h-screen bg-transparent">
        <div class="flex space-x-4 ">
          <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase">
            • Resume
          </h2>

          <a
            class="font-semibold tracking-wide uppercase text-slate-100 hover:text-lime-300"
            href="https://seungdang123.github.io/resume/"
            target="_blank"
          >
            Resume
          </a>
        </div>

        <div class="flex  space-x-4">
          <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase">
            • Profile Card
          </h2>

          <a
            class="font-semibold tracking-wide uppercase text-slate-100 hover:text-lime-300"
            href="https://seungdang123.github.io/profile/"
            target="_blank"
          >
            Profile Card
          </a>
        </div>

        <div class="flex  space-x-4">
          <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase">
            • Bucket List
          </h2>

          <a
            class="font-semibold tracking-wide uppercase text-slate-100 hover:text-lime-300"
            href="https://seungdang123.github.io/bucket-list/"
            target="_blank"
          >
            Bucket List
          </a>
        </div>

        <div class="flex  space-x-4">
          <h2 class="text-base text-yellow-300 font-semibold tracking-wide uppercase">
            • Login Page
          </h2>

          <a
            class="font-semibold tracking-wide uppercase text-slate-100 hover:text-lime-300"
            href="https://seungdang123.github.io/login-page/"
            target="_blank"
          >
            Login Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
