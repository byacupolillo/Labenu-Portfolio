import React from "react";
import axios from "axios";
import styled from "styled-components";
import { DeleteButton, AllPlaylistsContainer, OpenButton } from "./Style"

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const baseUrl2 = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

const axiosConfig = {
  headers: {
    Authorization: "beatriz-cupolillo-dumont",
  },
};

class AllPlaylists extends React.Component {
    state = {
        allPlaylists: [],
        detailedPlaylist: [],
        allDetails: false,
        playlistName: ""
    }

    componentDidMount = () => {
        this.getPlaylists();
    }

    getPlaylists = async () => {
        try {
            const response = await axios.get(baseUrl, axiosConfig);
            this.setState({allPlaylists: response.data.result.list});
        } catch(error) {
            console.log(error.message);
            window.alert("Ops..Algo deu errado. Tente novamente.");
          }
        }


    deletePlaylists = async (playlistId) => {
        if (window.confirm('Tem certeza que deseja deletar?')){
            try {
              await axios.delete(`${baseUrl}/${playlistId}`, axiosConfig);
              this.getPlaylists();
            } catch (error) {
            console.log(error.message);
            window.alert("Ops..Algo deu errado. Tente novamente.");
            }
        }
    }

    // Não consegui desenvolver a lógica para abrir a playlist e verificar e add as músicas
    // playlistDetails = () =>{
    //   this.setState({allDetails: !this.state.allDetails})
    // }

    // getTracks = (id, name) => {
    //   this.goToDetails();
  
    //   axios
    //     .get(
    //       baseUrl2, axiosConfig 
    //     )
    //     .then((response) => {
    //       this.setState({ detailsPlaylist: response.data.result.tracks });
    //       this.setState({ playlistName: name });
    //       console.log(response.data.result.tracks);
    //       console.log(this.state.playlistName);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // };


    render() {
        const renderedPlaylists = this.state.allPlaylists.map((playlist) => {
        return <p key={playlist.id}>{playlist.name}
        <DeleteButton onClick={() => this.deletePlaylists(playlist.id)}>Delete</DeleteButton>
        <OpenButton>Abrir Playlist</OpenButton>
        </p>;
        });
        
        return (
            <AllPlaylistsContainer>
                <h3>Playlists</h3>
                {renderedPlaylists}
            </AllPlaylistsContainer>
            );
          }
    }

export default AllPlaylists;