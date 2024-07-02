# Trickier Part

<details>
<summary>handleChange:code</summary>

```typescript
const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setContact({
        ...contact,
        [name]: checked,
      });
    } else {
      setContact({
        ...contact,
        [name]: value,
      });
    }
  };
  ```

</details>

This handleFunction was the most important and comparatively difficult as I have to use dynamic property to update user input to the state. <br> <br>
i have to destructure the name, value, type from the event.target as has to use 'as' assertion for them.
i have carefully chosen HTML tags that used in the form and has the target property, like: HTMLInputElement| MLSelectElement | HTMLTextAreaElement <br> <br>
if any value does not automatically take types from included ones, the use 'as' assertion for it. for example: in the case of 'checked', so, i have to use 'as HTMLInputElement'. <br> <br>
Type Assertion: Use event.target as HTMLInputElement when you need to access the checked property. This tells TypeScript that event.target is specifically an HTMLInputElement.

<details>
    <summary>Parts of code  :</summary>
Using value in form inputs is crucial for controlled components. It keeps the form data in sync with the component's state, allowing React to manage the data flow efficiently. This approach leads to more predictable, maintainable, and reusable form components. <br> <br>
value={contact.fname}: Ensures the input’s value is always the state’s value. Any changes to this input are reflected in the contact.fname state. <br> <br>
Controlled components rely on React's state to store form data.
This ensures that the form elements’ values are synchronized with the state, allowing React to control the form data.
Changes to the input fields are reflected in the state, and vice versa. <br>
<br>
***Types for ChangeEvent and ChangeEventHandler*** <br>

ChangeEvent is best for typing the event parameter directly in inline handlers. <br> <br>
ChangeEventHandler is better for typing complete handler functions or props, offering cleaner code.

</details>
