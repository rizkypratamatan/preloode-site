import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import IndexComponent from "./components/index/IndexComponent.tsx";
import LayoutComponent from "./components/LayoutComponent.tsx";


export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<LayoutComponent></LayoutComponent>}>
                    <Route index element={<IndexComponent></IndexComponent>}></Route>
                </Route>
            </Route>
        )
    );

    return (
        <RouterProvider router={router}></RouterProvider>
    );
}
