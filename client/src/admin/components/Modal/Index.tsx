/* eslint-disable @typescript-eslint/no-explicit-any */
interface ModalProps {
  title: string;
  divClass: string;
  content: any;
  onDiscard: () => void;
  sizeClass: string;
  spaceClass: string;
  onSubmit: any
}

const Modal = ({ title, content, onDiscard, divClass, sizeClass, spaceClass, onSubmit }: ModalProps) => {

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 z-[99999] overflow-y-auto dark:bg-dark/90 !block`}
      >
        <div
          className={divClass}
        >
          <div className={sizeClass}>
            <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-black/10 dark:bg-darklight dark:border-darkborder">
              <h5 className="text-lg font-semibold dark:text-white text-black">{title}</h5>

              {/* exit button (cross) */}
              <button
                type="button"
                className="text-muted hover:text-black dark:hover:text-white"
                onClick={onDiscard}
              >
                <svg
                  className="w-5 h-5"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2929 6.29289L6.29289 24.2929C6.10536 24.4804 6 24.7348 6 25C6 25.2652 6.10536 25.5196 6.29289 25.7071C6.48043 25.8946 6.73478 26 7 26C7.26522 26 7.51957 25.8946 7.70711 25.7071L25.7071 7.70711C25.8946 7.51957 26 7.26522 26 7C26 6.73478 25.8946 6.48043 25.7071 6.29289C25.5196 6.10536 25.2652 6 25 6C24.7348 6 24.4804 6.10536 24.2929 6.29289Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711L24.2929 25.7071C24.4804 25.8946 24.7348 26 25 26C25.2652 26 25.5196 25.8946 25.7071 25.7071C25.8946 25.5196 26 25.2652 26 25C26 24.7348 25.8946 24.4804 25.7071 24.2929L7.70711 6.29289Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
            </div>

            <div className={spaceClass}>
              <div className="text-black dark:text-muted">
                {content}
              </div>
              <div className="flex items-center justify-end gap-4">
                <button
                  type="button"
                  className="transition-all duration-300 border rounded-md btn text-danger border-danger hover:text-white hover:bg-red-400"
                  onClick={onDiscard}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="transition-all duration-300 border rounded-md btn text-purple border-purple hover:bg-purple hover:text-white"
                  onClick={onSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
