import React, { useState } from "react";
import classnames from "classnames";
import {
  BackgroundImage,
  Card,
  Checkbox,
  Chip,
  Divider,
  Group,
  Input,
  MantineProvider,
  NumberInput,
  Paper,
  Radio,
  Text,
  Transition,
} from "@mantine/core";

const scaleY = {
  in: { opacity: 1, transform: "scaleY(1)" },
  out: { opacity: 0, transform: "scaleY(0)" },
  common: { transformOrigin: "top" },
  transitionProperty: "transform, opacity",
};

const Category = ({ categories, activeCategory, setActiveCategory }) => {
  const [opened, setOpened] = useState(false);
  const [selectedCatg, setSelectedCatg] = useState([]);
  const [selectedPickups, setSelectedPickups] = useState("");
  const [selectFactor, setSelectFactor] = useState("1");
  const pickups = ["Oshogbo", "Idanre", "Oyo", "Jawa Timur", "Kalimantan"];
  const factors = [
    { dot: "white", color: "#1D4ED8", value: "1" },
    { dot: "white", color: "#BFDBFE", value: "2" },
    { dot: "white", color: "#2563EB", value: "3" },
    { dot: "black", color: "#FEFAE0", value: "4" },
    { dot: "black", color: "#FAEDCD", value: "5" },
    { dot: "white", color: "#3B82F6", value: "6" },
    { dot: "white", color: "#B7AC9A", value: "7" },
    { dot: "white", color: "#D4A373", value: "8" },
    { dot: "white", color: "#CC9715", value: "9" },
  ];

  const handleRipple = (event) => {
    const ripple = document.createElement("span");
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;

    ripple.classList.add("ripple");
    event.currentTarget.appendChild(ripple);

    setTimeout(() => {
      event.currentTarget.removeChild(ripple);
    }, 600);
  };

  const categoryClassNames = (category) => {
    return classnames({
      "text-gray-500 px-4 py-2  hover:bg-blue-500 hover:text-white text-left": true,
      "bg-blue-500 text-white": activeCategory === category,
    });
  };

  return (
    <>
      <Card className="catg-card-bg">
        <Text size={18} weight={600} className="mb-4">
          Price Range
        </Text>

        <Group noWrap position="apart" className="mb-5">
          <NumberInput hideControls placeholder="Low" />
          <NumberInput hideControls placeholder="High" />
        </Group>

        <Divider my="sm" color="#E7EAEE" className="mb-5" />

        <Text size={18} weight={600} className="mb-4">
          Categories
        </Text>

        <Chip.Group value={activeCategory}>
          <Group position="" mt="md" className="mb-5">
            {categories.map((category) => {
              return (
                <Chip
                  key={category}
                  value={category}
                  variant="filled"
                  color="indigo.8"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Chip>
              );
            })}
          </Group>
        </Chip.Group>

        <Divider my="sm" color="#E7EAEE" className="mb-5" />

        <Text size={18} weight={600} className="mb-4">
          Health Factors
        </Text>

        {/* <Paper
          shadow={0}
          style={{
            background: "red",
            height: "30px",
            width: "30px",
            padding: "11px",
            borderRadius: "25px",
          }}
        >
          <span
            style={{
              background: "white",
              height: "8px",
              width: "8px",
              display: "block",
              borderRadius: "12px",
            }}
          ></span>
        </Paper> */}

        <Radio.Group>
          <Group mt="xs">
            {factors.map((factor, ind) => {
              return (
                <Paper
                  key={ind}
                  shadow={0}
                  style={{
                    background: factor.color,
                    height: "30px",
                    width: "30px",
                    padding: "11px",
                    borderRadius: "25px",
                  }}
                  onClick={(e) => {
                    setSelectFactor(factor.value);
                    setOpened(true);
                  }}
                >
                  {selectFactor === factor.value && (
                    <span
                      style={{
                        background: factor.dot,
                        height: "8px",
                        width: "8px",
                        display: "block",
                        borderRadius: "12px",
                      }}
                    ></span>
                  )}
                </Paper>
                // <Radio
                //   key={ind}
                //   value={factor.value}
                //   color={factor.color}
                //   size="md"
                // />
              );
            })}
          </Group>
        </Radio.Group>

        <Divider my="sm" color="#E7EAEE" className="mb-5" />

        <Text size={18} weight={600} className="mb-4">
          Pickup Location
        </Text>

        <Checkbox.Group defaultValue={selectedPickups}>
          {pickups.map((pickup) => {
            return (
              <Checkbox
                key={pickup}
                value={pickup}
                label={pickup}
                size="xs"
                className="mb-3"
              />
            );
          })}
        </Checkbox.Group>
      </Card>
    </>
  );
};

export default Category;
