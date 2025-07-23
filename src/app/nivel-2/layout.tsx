import ContadorProvider from "@/context/CountContext";

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
