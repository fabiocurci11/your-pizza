export default function Button({ children, ...props }) {

  console.log(props)
    return (
      <button
        className="px-4  py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        {...props}
      >
        {children}
      </button>
    );
  }
  