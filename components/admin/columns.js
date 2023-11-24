import Image from "next/image";

export const COLUMNS = [
  // {
  //   Header: "Image",
  //   accessor: "summry.image",
  // },
  {
    Header: "Image",
    Cell: (row) => (
      <div>
        <Image
          alt="img"
          className="img-responsive"
          src={"user.user.summry.image"}
          fill
        />
      </div>
    ),
  },
  {
    Header: "Name",
    accessor: "summry.displayName",
  },

  {
    Header: "Email",
    accessor: "summry.email",
  },
];
