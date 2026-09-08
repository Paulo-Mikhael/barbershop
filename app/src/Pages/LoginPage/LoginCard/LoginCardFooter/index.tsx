import Image from "next/image";

export default function LoginCardFooter() {
  const lineStyles = "grow h-0.5 dark:bg-typo-500 bg-typo-700";
  const contactCircleStyles = "transition-all size-11 flex items-center justify-center rounded-full border dark:border-typo-500 border-typo-700 cursor-pointer hover:border-brand-default hover:bg-typo-700";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className={lineStyles} />
        <h4 className="dark:text-typo-500 text-caption">ou continue com</h4>
        <span className={lineStyles} />
      </div>
      <div className="flex justify-center items-center gap-2.5">
        <span className={contactCircleStyles}>
          <Image src="/images/login/google-logo.png" width={24} height={24} alt="google logo" />
        </span>
        <span className={contactCircleStyles}>
          <i className="devicon-github-original text-section-title dark:text-typo-200"></i>
        </span>
      </div>
      <h5 className="dark:text-typo-500 text-caption text-center">
        Não possui uma conta? <a className="text-brand-darker"><strong>Cadastre-se agora</strong></a>
      </h5>
    </div>
  );
}