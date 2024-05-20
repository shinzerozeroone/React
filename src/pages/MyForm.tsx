import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type MyForm = {
  mail: string;
  age: number;
};

export const MyForm = () => {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<MyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const [tasks, setTasks] = useState<MyForm[]>([]);

  const saveElement: SubmitHandler<MyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <label>Your mail</label>
        <br />
        <input
          type="email"
          {...register("mail", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            minLength: {
              value: 5,
              message: "more letters",
            },
          })}
        />
        <p>{errors.mail?.message}</p>
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          {...register("age", {
            required: true,
            min: {
              value: 18,
              message: "u will over then 18",
            },
          })}
        />
        <p>{errors.age?.message}</p>
        <button type="submit">Submit</button>
      </form>
      {tasks.map((task) => (
        <p>
          {task.mail} - {task.age}
        </p>
      ))}
    </>
  );
};

export default MyForm;
