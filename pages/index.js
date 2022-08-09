import Head from "next/head";
import Image from "next/image";
import NameSearch from "../components/NameSearch";
import styles from "../styles/Home.module.css";

const EndPoint = "https://dummyjson.com/users?limit=100";

export async function getServerSideProps() {
  const res = await fetch(EndPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function HomePage({ data }) {
  return (
    <div>
      <h1>Filter prac</h1>
      <NameSearch userData={data.users} />
    </div>
  );
}
