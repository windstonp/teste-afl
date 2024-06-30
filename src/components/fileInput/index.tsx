import { themeColors } from "@/global/theme";
import { useRef, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

export function FileComponent() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFiles(event.target.files);
    }
  };

  const OnChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div className="flex items-center justify-between mt-4 p-4 px-6 border rounded-lg border-gray-default">
      <div className="flex items-center">
        <AiOutlineFileAdd size={25} color={themeColors.gray.default} />
        <p className="text-gray-default ml-4">
          Selecione um ou mais arquivos no formato .pgn para{" "}
          <span className="text-gray-dark font-semibold">fazer upload</span>
        </p>
      </div>
      <input
        multiple
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleOnChange}
      />
      <button
        type="button"
        className="bg-primary p-2 px-4 text-white rounded"
        onClick={OnChooseFile}
      >
        Carregar arquivo
      </button>
    </div>
  );
}
