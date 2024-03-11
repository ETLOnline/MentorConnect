'use client';
import * as React from "react";
import { CaretSortIcon, CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem, CommandInput, } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Badge } from "../badge";
import { Label } from "../label";
import { ScrollArea } from "../scroll-area";

interface ISkill {
  id: string;
  label: string;
  value: string;
}
interface IProp {
  openSkillAutoComplete: boolean;
  skills: ISkill[];
  handleAutoCompleteSkills: (selectedItems: any) => void;
  className?: string;
}

const AutoCompleteSkillSelect = ({ openSkillAutoComplete, skills, handleAutoCompleteSkills, className }: IProp) => {
  const [open, setOpen] = React.useState(false);
  const [selectedSkills, setSelectedSkills] = React.useState<ISkill[]>([]);

  const toggleSelection = (currentSelectedSkill: ISkill) => {
    const index = selectedSkills.indexOf(currentSelectedSkill);
    if (index === -1) {
      setSelectedSkills([...selectedSkills, currentSelectedSkill]);
      handleAutoCompleteSkills([...selectedSkills, currentSelectedSkill]);
    } else {
      const updatedSelection = [...selectedSkills];
      updatedSelection.splice(index, 1);
      setSelectedSkills(updatedSelection);
      handleAutoCompleteSkills(updatedSelection);
    }
  };

  React.useEffect(() => {
    if (openSkillAutoComplete) {
      setOpen(openSkillAutoComplete);
    }
  }, [openSkillAutoComplete]);

  return (

    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild className={className} >
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full h-auto justify-between items-center">

          <div className="w-full h-auto flex justify-start gap-2 flex-wrap font-normal" >
            {selectedSkills.length > 0 ? (
              selectedSkills.map((skill) => (
                <Badge variant={'secondary'} key={skill.id} className="rounded-full py-1 px-2 bg-green-400 hover:bg-green-500">
                  {skills.find((s) => s.id === skill.id)?.label}
                  <Cross1Icon
                    className="w-3 h-3 ml-1 cursor-pointer"
                    onClick={() => setSelectedSkills(selectedSkills.filter((v) => v.id !== skill.id))}
                  />
                </Badge>
              ))
            ) : (
              "Select skills for this session"
            )}
          </div>

          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom">
        <ScrollArea className="h-72" >
          <Command>
            <CommandInput
              placeholder="Search skill..."
              className="h-9"
            />
            <CommandGroup>
              {skills.map((skill) => (
                <CommandItem
                  key={skill.id}
                  value={skill.value}
                  onSelect={() => toggleSelection(skill)}
                >
                  <Checkbox
                    id={skill.id}
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSelection(skill)}
                  />
                  <Label htmlFor={skill.id} >{skill.value}</Label>
                  <CheckIcon
                    className={cn("ml-auto h-4 w-4", selectedSkills.includes(skill) ? "opacity-100" : "opacity-0")}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </ScrollArea>
      </PopoverContent>
    </Popover>

  );
};


export default AutoCompleteSkillSelect;