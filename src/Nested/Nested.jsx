import React, { useState } from "react";
import styles from "../Nested/Nested.module.css"; 

const data = [
    {
        name: "Parent 1",
        children: [
            {
                name: "Child 1.1",
                children: [
                    { name: "Sub-child 1.1.1" },
                    { name: "Sub-child 1.1.2" },
                ],
            },
            {
                name: "Child 1.2",
                children: [
                    { name: "Sub-child 1.2.1" },
                    { name: "Sub-child 1.2.2" },
                ],
            },
        ],
    },
    {
        name: "Parent 2",
        children: [
            {
                name: "Child 2.1",
                children: [{ name: "Sub-child 2.1.1" }],
            },
            {
                name: "Child 2.2",
                children: [
                    { name: "Sub-child 2.2.1" },
                    { name: "Sub-child 2.2.2" },
                ],
            },
        ],
    },
    {
        name: "Parent 3",
        children: [
            {
                name: "Child 3.1",
                children: [{ name: "Sub-child 3.1.1" }],
            },
        ],
    },
];

const NestedList = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedChild, setSelectedChild] = useState(null);

    const handleParentClick = (parentIndex) => {
        setSelectedItem(parentIndex === selectedItem ? null : parentIndex);
        
        setSelectedChild(null);
    };

    const handleChildClick = (childIndex) => {
        setSelectedChild(childIndex === selectedChild ? null : childIndex);
    };

    return (
        <div className={styles.container}>
            {data.map((parent, parentIndex) => (
                <div key={parentIndex}>
                    <div
                        onClick={() => handleParentClick(parentIndex)}
                        className={styles.parentItem}
                    >
                        <i className={`fa fa-arrow-circle-right ${styles.arrowIcon}`} aria-hidden="true"></i>
                        {parent.name}
                    </div>

                    {selectedItem === parentIndex &&
                        parent.children.map((child, childIndex) => (
                            <div key={childIndex}>
                                <div
                                    onClick={() => handleChildClick(childIndex)}
                                    className={styles.childItem}
                                >
                                    <i className={`fa fa-arrow-circle-right ${styles.arrowIcon}`} aria-hidden="true"></i>
                                    {child.name}
                                </div>

                                {selectedChild === childIndex &&
                                    child.children && (
                                        <ul>
                                            {child.children.map((subChild, subChildIndex) => (
                                                <li key={subChildIndex} className={styles.subChildItem}>
                                                   
                                                    {subChild.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default NestedList;
