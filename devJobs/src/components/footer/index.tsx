export function Footer() {
  return (
    <footer className="flex justify-center items-center p-8 border-t border-blue-950 bg-indigo-950 hover:bg-blue-950 hover:border-indigo-950 transition-all duration-800 text-white py-4">
      <p className="font-bold text-lg">
        &copy; {new Date().getFullYear()} DevJobs. Todos os direitos reservados.
      </p>
    </footer>
  );
}