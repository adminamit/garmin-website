import React from "react";

const Table = ({ productSpecifications }) => {
    return (
        <>
            {productSpecifications.map((group) => {
                return (
                    <table key={group.id}>
                        <tbody>
                            <tr className="title">
                                <td
                                    colSpan="2"
                                    className="border-0 p-0 !pl-0 !pr-0"
                                >
                                    <h3 className="px-4 lg:px-0">
                                        {group.specificationGroup.title}
                                    </h3>
                                </td>
                            </tr>

                            {group.items.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">
                                            {item.specification.url ? (
                                                <a
                                                    href={
                                                        item.specification.url
                                                    }
                                                >
                                                    {item.specification.title}
                                                </a>
                                            ) : (
                                                item.specification.title
                                            )}
                                        </th>
                                        {item.value.toLowerCase() == "yes" ? (
                                            <td className="yes"></td>
                                        ) : (
                                            <td>{item.value}</td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                );
            })}
        </>
    );
};

export default Table;
