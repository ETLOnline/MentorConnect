import { FormField, FormLabel, FormControl, FormDescription, FormMessage } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [username, setUsername] = useState('');

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // Handle form submission logic (e.g., send data to server)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>      <FormField>
      <FormLabel htmlFor="username">Username</FormLabel>
      <FormControl>
        <Input
          id="username"
          name="username"
          placeholder="Enter username"
          value={username} // Controlled value
          onChange={(e) => setUsername(e.target.value)}
          {...register('username', {
            required: true, // Add validation rules
            minLength: 3,
            maxLength: 20,
          })}
        />
        {errors.username && <FormMessage>{errors.username.message}</FormMessage>}
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
    </FormField>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;