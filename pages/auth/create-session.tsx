import React, { useEffect, useRef, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { getAllSkillsOnly } from "../../utils_firebase/skills";

import { Cross1Icon, UploadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AutoCompleteSkillSelect from '@/components/ui/custom/auto-complete-skill-select';

interface ISkills {
  id: string;
  value: any;
  label: any;
}



const formSchema = z.object({
  sessionTitle: z.string().min(5, { message: "Session title must be at least 5 chars.", }),
  startTime: z.string().min(1, { message: "Start time is required." }),
  endTime: z.string().min(1, { message: "End time is required." }),
  points: z.string().min(1, { message: 'Points required to create this session.' }),
  sessionSkills: z.string().array().nonempty({ message: "select at least 1 skill." }),
  sessionImage: z.string().min(1, { message: 'Please select image for the session.' })
});

const createSession = () => {
  const [skills, setSkills] = useState<ISkills[] | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);
  const [openSkillsAutoComplete, setOpenSkillsAutoComplete] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sessionTitle: "",
      startTime: '',
      endTime: '',
      points: '',
      sessionSkills: []
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleSelectImage = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
    };
  };

  const handleCancelImage = () => {
    setPreviewImage(null);
  };

  const handleDropImage = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleSelectImage({ target: { files: [file] } });
  };


  const handleAutoCompleteSkills = (selectedSkillItems: { map: (arg0: (skill: any) => any) => [string, ...string[]]; }) => {
    form.setValue("sessionSkills", selectedSkillItems.map((skill: { value: any; }) => skill.value));
  };

  useEffect(() => {
    getAllSkillsOnly().then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className='p-6 md:p-10 grid md:grid-cols-7 gap-4' >

      <div className='md:col-span-2'>
        <Card >
          <CardHeader className='flex flex-col items-center'>
            <Avatar className='h-28 w-28'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle className='text-xl' >Create Session</CardTitle>
            <CardDescription>
              Description will come here.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex justify-center items-center gap-12'>
            <div >
              <h2 className='text-3xl font-bold text-center' >200</h2>
              <p className='capitalize font-base text-center' >Followers</p>
            </div>

            <div >
              <h2 className='text-3xl font-bold text-center' >200</h2>
              <p className='capitalize font-base text-center' >Points</p>
            </div>
          </CardContent>

          <CardFooter className='flex justify-center items-center gap-3'>
            <Avatar className='h-6 w-6'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className='h-6 w-6'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className='h-6 w-6'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className='h-6 w-6'>
              <AvatarImage className='' src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardFooter>
        </Card>
      </div>

      <div className='md:col-span-5'>
        <Card >
          <CardHeader>
            <CardTitle className='text-center text-2xl'>Create Session</CardTitle>
            <CardDescription className='text-center'>Fill in the form to create a Session.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="sessionTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Session Title:</FormLabel>
                      <FormControl>
                        <Input placeholder="Input session title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time:</FormLabel>
                      <FormControl>
                        <Input type='datetime-local' placeholder="Input start time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time:</FormLabel>
                      <FormControl>
                        <Input type='datetime-local' placeholder="Input end time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="points"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Points:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select points for this session." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((point) => (
                            <SelectItem key={point} value={String(point)}>{point} Points</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sessionSkills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel onClick={() => { setOpenSkillsAutoComplete(prev => !prev); }}>Skills:</FormLabel>
                      {skills && <AutoCompleteSkillSelect openSkillAutoComplete={openSkillsAutoComplete} skills={skills} handleAutoCompleteSkills={handleAutoCompleteSkills} {...field} />}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='min-h-32 border-dashed border-2 rounded-lg relative'>
                  {!previewImage &&
                    <>
                      <input
                        className='h-full w-full absolute z-20 opacity-0 hover:cursor-pointer'
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleSelectImage(event)}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={(event) => { handleDropImage(event); }}
                      />

                      <div className='absolute h-full w-full bg-background top-0 rounded-md flex flex-col gap-2 justify-center items-center' >
                        <UploadIcon className='h-10 w-10' />
                        <p className='text-xs'>Click or drag an image.</p>
                      </div>
                    </>
                  }

                  {previewImage && (
                    <div className='w-full h-full p-4 flex justify-center '>
                      <div className='relative flex flex-col items-center gap-2' >
                        <span
                          className='absolute -top-2 -right-2 bg-border flex justify-center items-center p-1 rounded-full hover:cursor-pointer hover:bg-red-500 hover:text-white'
                          onClick={handleCancelImage}
                        >
                          <Cross1Icon className='' />
                        </span>

                        <img src={previewImage.toString()}
                          alt="Selected Image" className='h-32 w-auto border-border rounded-md'
                        />
                      </div>
                    </div>
                  )}


                </div>



                <div className='flex justify-end pt-2' >
                  <Button type="submit">Submit</Button>
                </div>

              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

    </div>

  );
};

export default createSession;