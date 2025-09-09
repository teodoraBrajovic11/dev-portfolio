function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers);

const strings = ["a", "b", "c"];
const firstString = getFirstElement(strings);

const inputEl = document.querySelector<HTMLInputElement>(".input");

input?.value;

const map = new Map<string, Map<string, number>>();

//*****generic types*****

type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "test",
  },
  isError: false,
};

const responseApi: ApiResponse = {
  data: {
    status: 200,
  },
  isError: false,
};
