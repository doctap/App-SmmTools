import React, { useState } from 'react';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import MyInput from './Components/UI/inputs/MyInput';
import PanelNav from './Components/UI/navigation/PanelNav';
import MySelect from './Components/UI/selects/MySelect';
// import ClassCounter from './Components/ClassCounter';
// import Counter from './Components/Counter';
import './Styles/App.scss';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript', body: 'Description' },
		{ id: 2, title: 'JavaScript 2', body: 'Description' },
		{ id: 3, title: 'JavaScript 3', body: 'Description' },
	]);

	const [searchQuery, setSearchQueary] = useState('');

	const [selectedSort, setSelectedSort] = useState('');

	const sortPosts = (sort) => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	};

	const createPost = (newPost) => {
		setPosts([...posts, newPost]) 
	};

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	};

	return (
		<div className="App">
			<PanelNav></PanelNav>

			<MyInput 
				value={searchQuery}
				onChange={event => setSearchQueary(event.target.value)}
				placeholder='Search'
			/>

			<PostForm create={createPost} />
			<MySelect 
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='Sort'
				options={[
					{value: 'title', name: 'By name'},
					{value: 'body', name: 'By description'},
				]}
			/>
			{
				posts.length !== 0
					? <PostList remove={removePost} posts={posts} title={'Posting list'} />
					: <h1 style={{ textAlign: 'center' }}>Posts Not Found</h1>
			}

		</div>
	);
}

export default App;
