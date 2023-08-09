export default function Button(props) {
  return (
    <button
      className={`

    ${
      props.color === 'pink' &&
      'text-[#f5f5f5] bg-[#C92071] hover:bg-[#991956] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed'
    }

    ${
      props.color === 'white' &&
      'text-[#C92071] bg-[#F5F5F5] hover:bg-[#B5B6F2] hover:text-[#F5F5F5] disabled:opacity-50 disabled:border disabled:border-[#C92071] disabled:cursor-not-allowed'
    }

    ${
      props.color === 'yellow' &&
      'text-[#f5f5f5] bg-[#FFB31F] hover:bg-[#CF8900] disabled:bg-[#CCCCCC] disabled:cursor-not-allowed'
    }

    ${
      props.type === 'default' &&
      'px-9 py-3 text-sm font-bold leading-5 tracking-wider rounded'
    }

    `}
    >
      {props.title}
    </button>
  );
}
