"use client";

export default function MainView() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">LIAR GAME</h1>
      </header>

      <section className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="닉네임 입력"
          className="px-4 py-2 rounded-md text-black"
        />
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
          방 입장하기
        </button>
      </section>
    </main>
  );
}
