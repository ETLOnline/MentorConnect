import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { CUIAutoComplete } from "chakra-ui-autocomplete";

const countries = [
  { value: "HTML", label: "HTML" },
  { value: "JS", label: "JS" },
  { value: "ReactJs", label: "ReactJs" },
  { value: "MachineLearning", label: "MachineLearning" },
  { value: "Desgining", label: "Desgining " },
];

export default function SkillTag() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <ChakraProvider>
      <Box px={1} py={4} maxW="xl">
        <CUIAutoComplete
          label="Select Skills"
          placeholder="Type a Skills"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          tagStyleProps={{
            rounded: "full",
            bgColor: "blue",
            color: "white",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem",
          }}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </Box>
    </ChakraProvider>
  );
}
