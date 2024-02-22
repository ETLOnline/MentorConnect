import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

export default function SkillTag({
  skills,
  handleSelectedChange,
  userSkills,
  reset,
}) {
  const [pickerItems, setPickerItems] = React.useState(skills);
  const [selectedItems, setSelectedItems] = React.useState(
    userSkills ? userSkills : []
  );

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      handleSelectedChange(selectedItems);
    }
  };

  return (
    <ChakraProvider>
      <Box className="min-w-full">
        <CUIAutoComplete
          // label="Select Skills"
          placeholder="Type a Skills"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          labelStyleProps={{
            margin: '0.5',
          }}
          inputStyleProps={{
            width: 'full',
            borderWidth: 'thin',
            borderStart: 'solid',
            borderColor: 'gray.200',
            focusBorderColor: 'indigo'
          }}
          tagStyleProps={{
            rounded: "full",
            bgColor: "#1C2D56",
            color: "white",
            py: 2,
            px: 4,
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
