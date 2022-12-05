FROM python:3.10

# install torch dependencies for neural style transfer
WORKDIR /
RUN cd ~
RUN curl -s https://raw.githubusercontent.com/torch/ezinstall/master/install-deps | bash
RUN git clone https://github.com/torch/distro.git ~/torch --recursive
RUN apt-get install -y libreadline-dev cmake
RUN cd ~/torch
RUN yes | ./install.sh
RUN source ~/.bashrc

# install lua dependencies for neural style transfer
RUN apt-get install -y libprotobuf-dev protobuf-compiler
RUN luarocks install loadcaffe

# download neural style transfer model
RUN sh models/download_models.sh

