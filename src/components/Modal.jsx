export default function Modal({text = '', html = ''}) {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white m-10 p-10 rounded-lg shadow-lg border-4 border-gray-400">
            {text}
            {html && <div dangerouslySetInnerHTML={{__html: html}}></div>}
        </div>
      </div>
    )
}