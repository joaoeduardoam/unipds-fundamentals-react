import ContadorProvider from "@/context/nivel-2/CountContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContadorProvider>
      <div>{children}</div>
    </ContadorProvider>
  );
}
